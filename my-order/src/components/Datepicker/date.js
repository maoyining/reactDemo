//获取所有日子的函数
export default function getMonthData(year,month){
  let res=[];
  //本月的第一天
  let firstDay=new Date(year,month,1);
  let firstDayWeek=firstDay.getDay();
  if(firstDayWeek===0){ //处理周日为0的情况
      firstDayWeek=7;
  }
  //上个月的最后一天
  let lastDayLM=new Date(year,month,0);
  let lastDayLMWeek=lastDayLM.getDay();
  if(lastDayLMWeek===0){//处理周日为0的情况
      lastDayLMWeek=7;
  }
  //把上个月的部分日期放入数组
  let lastDayLMDate=lastDayLM.getDate();
  for(let i=firstDayWeek-1;i>=1;i--){
      let realMonth;
      let realYear;
      if(month===0){
          realMonth=11;
          realYear=year-1;
      }else{
          realMonth=month-1;
          realYear=year;
      }
      let date=new Date(realYear,realMonth,lastDayLMDate);
      res.unshift(date);
      lastDayLMDate--;
  }

  //本月最后一天
  let lastDay=new Date(year,month+1,0);
  let lastDayWeek=lastDay.getDay();
  if(lastDayWeek===0){
      lastDayWeek=7;
  }
  //把本月的所有天数放入数组
  for(let i=1;i<=lastDay.getDate();i++){
      let date=new Date(year,month,i);
      res.push(date);
  }
  //把下个月应该放的天数都放进数组
  for(let i=1;i<=7-lastDayWeek;i++){
      let realMonth;
      let realYear;
      if(month===11){
          realMonth=0;
          realYear=year+1;
      }else{
          realMonth=month+1;
          realYear=year;
      }
      let date=new Date(realYear,realMonth,i);
      res.push(date);
  }
 
  return res;
}