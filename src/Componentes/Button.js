import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 0,
};

export default class Button extends React.Component {
  state = {
    dialog: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("EXIBINDO O CONTEUDO DO PROPS - Button");
    console.log(this.props.dados[0]);
  };

  
  render () {
    

    return (
      <div>
        <RaisedButton label='Criar Dialogo' primary fullWidth style={style} onClick={e => this.onSubmit(e)}/>
        {/* <RaisedButton label = 'Criar Dialogo' primary fullWidth style = {style} onClick={console.log("TESTE CLICK")} /> */}
        <br />
      </div>
    )
  }
}
