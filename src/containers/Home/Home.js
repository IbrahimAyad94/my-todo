import React, { Component } from 'react'
import style from './Home.module.css';
import Button from '../../components/UI/Buttons/Buttons'
import Card from '../../hoc/Card/Card';
class Home extends Component {

    state = {
        price: '',
        profitRatio: '',
        myGain: 0,
        totalSale: 0,
    }

    onChangeInput = (event) => {
        if (event.target.name == 'price') {
            this.setState({price: event.target.value});
        } else {
            this.setState({profitRatio: event.target.value});
        }
    }

    onSave = () => {
        this.setState(prevState => {
            return {
                myGain: (prevState.profitRatio * prevState.price) / 100,
                totalSale: +(prevState.profitRatio * prevState.price) / 100 + +prevState.price,
            }
        });
    }

    onCancel = () => {
        this.setState({profitRatio: '', price: '', myGain: 0, totalSale: 0});
    }



    render() {
        return (
            <div className="container" dir="rtl">
                <div className={style.FormRow}>
                    <input
                        type="number"
                        className={style.Input}
                        value={this.state.price}
                        onChange={this.onChangeInput}
                        name="price"
                        id="price"
                        placeholder="اكتب هنا سعر المنتج"
                    />
                </div>


                <div className={style.FormRow}>
                    <input
                        type="number"
                        className={style.Input}
                        value={this.state.profitRatio}
                        onChange={this.onChangeInput}
                        name="profitRatio"
                        id="profitRatio"
                        placeholder="اكتب هنا نسبه الربح"
                    />
                </div>

                <Button btnType="sucess" onClick={this.onSave}>احسب</Button>
                <Button btnType="danger" onClick={this.onCancel}>الغاء</Button> 

                <br/>
                <br/>
                <hr/>

                <Card>
                            القيمه المضافه :   {this.state.myGain} 
                </Card>

                <Card>
                          قيمه البيع النهائى :     {this.state.totalSale} 
                </Card>
            </div>
        )
    }
}

export default Home;