import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { Table, version } from 'antd'
import ReactDragListView from 'react-drag-listview'
import 'antd/dist/antd.css'

class Drag extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          sr: "1",
          Order: "P145000",
          Supplier: "Dole Fresh",
          Shipfrom: "Northern cal",
          Shipdate: "11/24/2018",
          Deliveryto:"Salinas WH",
          Deliverydate:"11/30/2018",
          Grwt:"1000",
          Qty:"200 cases",
          Vol:"20",
          Vol:"20",

        },        
        {
          sr: "2",
          Order: "p145000",
          Supplier: "Dole Fresh",
          Shipfrom: "Northern cal",
          Shipdate: "11/24/2018",
          Deliveryto:"Salinas WH",
          Deliverydate:"11/30/2018",
          Grwt:"1000",
          Qty:"200 cases",
          Vol:"20",
          Vol:"20",
        },
        {
          sr: "3",
          Order: "P145000",
          Supplier: "Dole Fresh",
          Shipfrom: "Northern cal",
          Shipdate: "11/24/2018",
          Deliveryto:"Salinas WH",
          Deliverydate:"11/30/2018",
          Grwt:"1000",
          Qty:"200 cases",
          Vol:"20",
          Vol:"20",
        },
        {
          sr: "4",
          Order: "P145000",
          Supplier: "Dole Fresh",
          Shipfrom: "Northern cal",
          Shipdate: "11/24/2018",
          Deliveryto:"Salinas WH",
          Deliverydate:"11/30/2018",
          Grwt:"1000",
          Qty:"200 cases",
          Vol:"20",
          Vol:"20",
        },
        {
          sr: "5",
          Order: "P145000",
          Supplier: "Dole Fresh",
          Shipfrom: "Northern cal",
          Shipdate: "11/24/2018",
          Deliveryto:"Salinas WH",
          Deliverydate:"11/30/2018",
          Grwt:"1000",
          Qty:"200 cases",
          Vol:"20",
          Vol:"20",

        }
      ],
      columns: [
        {
          title: "sr",
          dataIndex: "sr"
        },
        {
          title: "Order#",
          dataIndex: "Order"
        },
        {
          title: "Supplier",
          dataIndex: "Supplier"
        },
        {
          title: "Shipfrom",
          dataIndex: "Shipfrom"
        },
        {
          title: "Shipdate",
          dataIndex: "Shipdate"
        },
        {
          title: "Delivery to",
          dataIndex: "Deliveryto"
        },
        {
          title: "Delivery date",
          dataIndex: "Deliverydate"
        },
        {
          title: "Gr.wt.(Lbs)",
          dataIndex: "Grwt"
        },
        {
          title: "Qty",
          dataIndex: "Qty"
        },
        {
          title: "Vol.(Cu.Ft.)",
          dataIndex: "Vol"
        },
       
        {
          title: "Vol",
          dataIndex: "Vol"
        },
        
      ]
    }

    const that = this;
    this.dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const columns = that.state.columns;
        const item = columns.splice(fromIndex, 1)[0];
        columns.splice(toIndex, 0, item);
        that.setState({
          columns
        });
      },
      nodeSelector: "th"
    };
  }

  render() {
    return (
      <div style={{ marginLeft:"55px",marginTop:"10px",borderTop:"1px solid red"}}>
       
        <ReactDragListView.DragColumn {...this.dragProps}>
          <Table
            columns={this.state.columns}
            pagination={false}
            dataSource={this.state.data}
            bordered
           
          />
        </ReactDragListView.DragColumn>
        <div style={{width:"300px",height:"200px",border:"1px solid gray",marginTop:"30px",marginLeft:"40px"}}>

        </div>
      </div>
    );
  }
}
export default Drag;