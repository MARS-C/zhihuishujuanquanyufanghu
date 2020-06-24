"use strict";

$(function () {
  function valtype(val) {
    val = val - 0;

    if (val > 0) {
      return "rate rate-top";
    } else if (val < 0) {
      return "rate rate-bot";
    } else if (val == 0) {
      return "rate";
    }
  }

  ; //用户在线率

  function userOnline() {
    axios.get("../../json/homepage/system/user.json").then(function (res) {
      var onlinedata = res.data;

      if (onlinedata) {
        $("#onlineNumber").html(onlinedata["OnlineCount"]);
        $("#userNumber").html(onlinedata["TotalCount"]);
        $("#yhzxlChart").dashboard({
          value: onlinedata["OnlineRate"]
        });
      }
    });
  }

  userOnline(); //终端在线率

  function deviceOnline() {
    axios.get("../../json/homepage/system/device.json").then(function (res) {
      var onlinedata = res.data; //console.log(onlinedata);

      if (onlinedata) {
        $("#deviceonlineNumber").html(onlinedata["OnlineCount"]);
        $("#deviceNumber").html(onlinedata["TotalCount"]);
        $("#zdzxlChart").dashboard({
          value: onlinedata["OnlineRate"],
          color: "green"
        });
      }
    });
  }

  deviceOnline(); //资源使用率

  function serverstatus() {
    axios.get("../../json/homepage/system/serverstatus.json").then(function (res) {
      var statusedata = res.data;

      if (statusedata) {
        $("#zysylChart").zybar(statusedata);
      }
    });
  }

  serverstatus(); //离线终端

  function offlinedev() {
    axios.get("../../json/homepage/system/offlinedev.json").then(function (res) {
      var offlinedevdata = res.data; //console.log(statusedata);

      if (offlinedevdata) {
        $("#offlinedevList").onlinelist(offlinedevdata.OfflineDevList);
      }
    });
  }

  offlinedev(); //操作系统统计

  function systemStatistics() {
    axios.get("../../json/homepage/system/devos.json").then(function (res) {
      var systemdata = res.data;

      if (systemdata) {
        //统计饼状图
        $("#czxttjChart").tjPie(systemdata);
      }
    });
  }

  systemStatistics(); //终端部署版本统计

  function devversion() {
    axios.get("../../json/homepage/system/devversion.json").then(function (res) {
      var devversiondata = res.data;

      if (devversiondata) {
        var versionyAxis = [],
            versiondata = [];
        $.each(devversiondata, function (ind, item) {
          versionyAxis.push(item["AgentVersion"]);
          versiondata.push(item["AgentCount"]);
        });
        $("#zdbsbbtjChart").bbtjbar({
          yAxis: versionyAxis,
          data: versiondata
        });
      }
    });
  }

  devversion(); //风险用户

  function riskuser() {
    var count = ["TodayRiskUserCount", "SevenDayRiskUserCount"],
        trend = ["TodayRiskUserCountUp", "SevenDayRiskUserCountUp"];
    axios.get("../../json/homepage/system/riskuser.json").then(function (res) {
      var riskuserdata = res.data;

      if (riskuserdata) {
        $("#riskUser").setriskuser(riskuserdata);
        $.each(count, function (ind, item) {
          //console.log(riskuserdata[item]);
          $("#" + item).html(riskuserdata[item]);
        });
        $.each(trend, function (ind, item) {
          $("#" + item).html(Math.abs(riskuserdata[item]) + '%').removeClass("").addClass(valtype(riskuserdata[item]));
        });
      }
    });
  }

  riskuser(); //趋势分析

  function eventtrend() {
    var count = ["TodayRiskTotalCount", "SevenDayRiskTotalCount", "TodayEventTotalCount", "SevenDayEventTotalCount"],
        trend = ["TodayRiskTotalCountUp", "SevenDayRiskTotalCountUp", "TodayEventTotalCountUp", "SevenDayEventTotalCountUp"];
    axios.get("../../json/homepage/system/eventtrend.json").then(function (res) {
      var eventtrenddata = res.data;

      if (eventtrenddata) {
        $("#qsfxChart").qsline({
          xAxis: {
            data: eventtrenddata["Dates"]
          },
          legend: {
            data: ['风险', '事件']
          },
          series: [{
            name: "风险",
            data: eventtrenddata["RiskTrendDatas"]
          }, {
            name: "事件",
            data: eventtrenddata["EventTrendDatas"]
          }]
        });
        $.each(count, function (ind, item) {
          $("#" + item).html(eventtrenddata[item]);
        });
        $.each(trend, function (ind, item) {
          $("#" + item).html(Math.abs(eventtrenddata[item]) + '%').removeClass("").addClass(valtype(eventtrenddata[item]));
        });
      }
    });
  }

  eventtrend(); //服务器信息

  function serverinfo() {
    axios.get("../../json/homepage/system/serverinfo.json").then(function (res) {
      var serverinfodata = res.data;

      if (serverinfodata) {
        var infordom = "";
        $.each(serverinfodata, function (ind, item) {
          infordom += ' <li class="msg-item" ><i class="' + item["icon"] + '"></i> <span class="msg-key">' + item["LabelName"] + '</span><span class="msg-val">' + item["LabelValue"] + '</span></li>';
        });
        $("#serverInfolist").html(infordom);
      }
    });
  }

  serverinfo();
});