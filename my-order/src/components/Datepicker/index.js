import React, { Component } from 'react';
import './index.css'
import getMonthDate from './date.js'
//时间选择器上面那一行的头
function PickerHeader(props) {
  return (
    <div className="ui-datepicker-header">
      <a href="/#" className="ui-datepicker-btn ui-datepicker-prev" onClick={() => { props.prevMonth() }}>&lt;</a>
      <span className="ui-datepicker-curr-month">{props.year}-{props.month}</span>
      <a href="/#" className="ui-datepicker-btn ui-datepicker-next" onClick={() => { props.nextMonth() }}>&gt;</a>
    </div>
  )
}

function PickerSquare(props) {
  return (
    <td year={props.value.getFullYear()}
      month={props.value.getMonth() + 1}
      day={props.value.getDate()}>
      {props.value.getDate()}
    </td>
  )
}
function PickerThead(props) {
  return (
    <thead>
      <tr>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
        <th>日</th>
      </tr>
    </thead>
  )
}
function PickerInput (props){
    return(
    <input 
      onMouseEnter={()=>{props.renderBoard()}} 
      className="ui-datepicker-input"
      defaultValue={props.nowDate || ''}>
    </input>
    ) 
}
class PickerBody extends Component {
 
  render() {

    if(this.props.isRender===false){
      return (<div></div>)
    }
    //这个地方需要改
    const days = this.props.squares.slice();
    let result = [];
    let rowDate = [];//一行的数据
    for (let i = 0; i < days.length; i++) {
      rowDate.push(days[i]);
      if ((i + 1) % 7 === 0) {
        result.push(rowDate);
        rowDate = [];
      }
    }
    let board = (arr) => {
      let res = [];
      for (let i = 0; i < arr.length; i++) {
        let rowDate = arr[i];
        let row = [];
        for (let j = 0; j < rowDate.length; j++) {
          row.push(<PickerSquare key={i * 7 + j} value={rowDate[j]} />);
        }
        res.push(<tr key={i}>{row}</tr>);
      }

      return (res);
    }
    
    return (
      <div className="ui-datepicker-wrapper">
        <PickerHeader
          year={this.props.nowYear}
          month={this.props.nowMonth + 1}
          prevMonth={() => { this.props.prevMonth() }}
          nextMonth={() => { this.props.nextMonth() }}
        />
        <div className="ui-datepicker-body">
          <table>
            <PickerThead/>
            <tbody onClick={(e) => { this.props.getDetail(e) }}>
              {board(result)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
class index extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nowTime: undefined,
      nowYear: 0,
      nowMonth: 0,
      nowDate:null,
      squares: [],
      isRender:false
    }
  }
  componentDidMount() {
    let nowTime = new Date();
    let nowYear = nowTime.getFullYear();
    let nowMonth = nowTime.getMonth();
    let date = getMonthDate(nowYear, nowMonth);
    this.setState({
      nowTime: nowTime,
      nowYear: nowYear,
      nowMonth: nowMonth,
      squares: date
    })
  }
  getDetail(e) {
    let node = e.target;
    if(node.nodeName==='TD'){
      let year=node.getAttribute("year");
      let month=node.getAttribute("month");
      let day=node.getAttribute("day");
      month.length===1 ? month="0"+month : month=month;
      day.length===1 ? day="0"+day : day=day;
      this.setState({nowDate:year+"-"+month+"-"+day});
    }
  }

  prevMonth() {
    if (this.state.nowMonth !== 0) {
      this.setState({
        nowMonth: this.state.nowMonth - 1,
        squares: getMonthDate(this.state.nowYear, this.state.nowMonth - 1)
      })
    } else {
      this.setState({
        nowYear: this.state.nowYear - 1,
        nowMonth: 11,
        squares: getMonthDate(this.state.nowYear - 1, 11)
      })
    }
  }
  nextMonth() {
    if (this.state.nowMonth !== 11) {
      this.setState({
        nowMonth: this.state.nowMonth + 1,
        squares: getMonthDate(this.state.nowYear, this.state.nowMonth + 1)
      })
    } else {
      this.setState({
        nowYear: this.state.nowYear + 1,
        nowMonth: 0,
        squares: getMonthDate(this.state.nowYear + 1, 0)
      })
    }
  }
  renderBoard(){
    this.setState({
      isRender:true
    })
  }
  hideBoard(){
    this.setState({
      isRender:false
    })
  }
  render(){
    return(
      <div className="ui-input-wrapper" onMouseLeave={()=>{this.hideBoard()}}>
        <PickerInput nowDate={this.state.nowDate} renderBoard={()=>{this.renderBoard()}} />
        <PickerBody 
          isRender={this.state.isRender}
          squares={this.state.squares}
          nowYear={this.state.nowYear}
          nowMonth={this.state.nowMonth}
          prevMonth={()=>{this.prevMonth()}}
          nextMonth={()=>{this.nextMonth()}}
          getDetail={(e)=>this.getDetail(e)}
          />
      </div>
    )
  }
  
}
export default index;