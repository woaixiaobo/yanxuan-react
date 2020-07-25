import React, { Component } from 'react';
import ReactDOM from "react-dom"
import PropTypes from "prop-types";
import "./index.css"
class Modal extends Component {
    static propTypes={
        content:PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
        ]).isRequired,
        visible: PropTypes.bool.isRequired,
        hiddenModal: PropTypes.func,
    }
    //设置个默认的props值
    static defaultValue = {
        hiddenModal:()=>{},
    }
    constructor(){
        super();
        //初始化容器
        this.div = document.createElement('div')
    }
    componentDidMount(){
        //此时页面渲染完成，render已经完成了
        //将div元素插入到页面中生效
        document.body.appendChild(this.div);
    }
    componentWillUnmount(){
        console.log("1");
        
        //此时组件已经卸载掉了，就清除掉多余的元素
        this.div.remove();
    }
    render() {
        const{content,visible,hiddenModal} = this.props
        const Modal=(
            <div className="modal" style={{display:visible?'block':'none'}}>
                <div className="block">
                    <p>全部频道</p>
                    <div className="navItem2" >
                    <span >推荐</span>
                    <span >居家生活</span>
                    </div>
                </div>
                {content}
                <div className="modal-mask" onClick={hiddenModal}></div>
            </div>
        )
        return ReactDOM.createPortal(Modal,this.div)
        // return Modal
    }
}

export default Modal;