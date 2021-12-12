import React,{Component} from 'react';
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Info from "./InfoComponent";
import{ Switch, Redirect, Route, withRouter } from "react-router-dom";
import InfoDetail from "./InfodetailComponent";

class Main extends Component
{
    constructor(props){
        // console.log("constructor in Main was called");
        super(props);

        /* init the state */
        this.state = {
            MasterChecked: false,
            infoList :[
                {id:0, selected:false,des:"For test purpose",cat:1,content:"testtest" },
                {id:1, selected:false,des:"For test purpose aaa",cat:1,content:"testtest" },
                {id:2, selected:false,des:"test2",cat:1,content:"testtest" },
                {id:3, selected:false,des:"test3",cat:1,content:"testtest" }
            ],
            nextId: 4
        }
        this.onItemCheck = this.onItemCheck.bind(this);
        this.onMasterCheck = this.onMasterCheck.bind(this);
        this.onDeleteSelected = this.onDeleteSelected.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    onDeleteSelected()
    {
        const tempList = this.state.infoList.filter(info=>info.selected == false);
        this.setState({infoList:tempList});
    }

    // Update List Item's state and Master Checkbox State
    onItemCheck(e, item) {
        const tempList = [...this.state.infoList];
        tempList.map((info) => {
            if (info.id === item.id) {
                info.selected = e.target.checked;
            }
            return info;
        });

        //To Control Master Checkbox State
        const totalItems = this.state.infoList.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        // Update State
        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            infoList: tempList,
            // SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    handleItemDelete(infoId)
    {
        const tempList = this.state.infoList.filter( info => info.id != infoId);
        this.setState({infoList:tempList});
    }

    handleSubmit = (description, category, content) =>
    {
        // e.preventDefault();
        // console.log(description);
        // console.log(category);
        // console.log(content);
        const tempList = [...this.state.infoList];
        const newInfo = {id:this.state.nextId,
            selected:false,des:description,cat:category,content:content};

        const newNextId = this.state.nextId+1;

        tempList.push(newInfo);

        // Update State
        this.setState({
            // MasterChecked: totalItems === totalCheckedItems,
            infoList: tempList,
            nextId: newNextId,
        });
    }

    // Select/ UnSelect Table rows
    onMasterCheck(e) {
        let tempList = this.state.infoList;
        // Check/ UnCheck All Items
        tempList.map((user) => (user.selected = e.target.checked));

        //Update State
        this.setState({
            MasterChecked: e.target.checked,
            infoList: tempList,
            // SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    render() {

        const HomePage = () =>{
            return (
                <div>
                    <h1>main page</h1>
                </div>
            );
        };

        // const infoWithId

        const InfoWithId = ({match}) =>{
            return (
                <InfoDetail
                    detail = {this.state.infoList.filter((info) => info.id === parseInt(match.params.infoId,10))[0]}
                />
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/todo'
                           component={() => <Info
                               infoList = {this.state.infoList}
                               MasterChecked = {this.state.MasterChecked}
                               onItemCheck = {this.onItemCheck}
                               onMasterCheck = {this.onMasterCheck}
                               onDeleteSelected = {this.onDeleteSelected}
                               handleSubmit = {this.handleSubmit}
                               onItemDelete = {this.handleItemDelete}
                           />}
                    />
                    <Route path='/todo/:infoId' component={InfoWithId} />
                    <Route exact path='/about' component={() => <About/>} />
                    <Redirect to="/todo" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);