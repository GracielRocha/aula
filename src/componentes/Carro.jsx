import React from 'react';
export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.modelo = "Mareia"


        this.state = {
            ligado:false,
            explodiu:false,
            velocidad:0

        }
        ligadoDesligado() {
            this.setState({ligado:!this.state.ligado})
            if(this.state.ligado)
            this.setState({velocidade:+ 0})
        }
    }
    acelera() {
        let el = this.state.velocidad + 10 
        this.setState({velocidade:velo})

        this.state.velocidade = velo
        console.log("velocidade",this.setState.velocidade)

        if (this.state.velocidade > 190) {
            this.setState({explodiu:true})

        }
        parar(){
            this.setState({explodiu: true})
        }
    }

    frear(){
        let velo = this.state.velocidade - 10
        this.setState({velocidade: velo})
    }

    parar(){
        this.setState({velocidade: 0})
    }
    render() {
        return(
            <div>
                <h4>
                    Carro bomba: {this.modelo}
                </h4>

                <h4>
                    Ligado: {this.state.ligado ? "Sim" : "Não"}
                </h4>

                <h4>
                    Explodiu: {this.state.explodiu ? "BOOOOOOOOOOM" : "Não"}
                </h4>
                <h4>
                    Velocidade: {this.state.velocidade}
                </h4>
                <button onClick={
                    () => this.ligaDesliga()
                }>
                    Girar Chave
                </button>

                <button onClick={
                    () => this.acelerar()
                }>
                    Acelerar
                </button>
                
                <button onClick={
                    () => this.frear()
                }>
                    Frear
                </button>

                <button onClick={
                    () => this.parar()
                }>
                    Parar
                </button>

            </div>
        )
    }

}