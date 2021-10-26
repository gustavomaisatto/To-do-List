class List {
    constructor() {
        this.id = 1
        this.arrayAfazeres = []
    }
    salvar() {
        let afazer = this.lerDados();
        this.validaCampo(afazer);
        this.adicionar(afazer);
        this.lista();
    }
    adicionar(afazer) {
        this.arrayAfazeres.push(afazer)
        this.id++
    }

    lista() {
                let afazer = this.lerDados();
                let ul = document.getElementById('list')
                
                let li = document.createElement('li')
                let listDelete = document.createElement('img')
                listDelete.src = '../img/recycle.png'
                listDelete.setAttribute('onclick','afazer.deletar(' + this.arrayAfazeres.id + ')')

                li.appendChild(document.createTextNode(afazer.campo))
                li.appendChild(listDelete)
                ul.appendChild(li)
                console.log(listDelete)


        }
    atualizarAfazer() {
        for (let i = 0; i .arrayAfazeres< array.arrayAfazeres.length; i++) {
            if (this.arrayAfazeres[i] == this.id) {
                this.arrayAfazeres[i].campo == afazer.campo;
            }       
        }
    }
    lerDados() {
        let afazer = {}
        afazer.id = this.id
        afazer.campo = document.getElementById('list-item').value
        return afazer
    }

    validaCampo(afazer) {
        if (afazer.campo == '') {
            alert('Insira um afazer válido.')
            return false
        } else {
            return true
        }

    }

    deletar(id) {
        if (confirm('Deseja realmente deletar o afazer de número: ' + id)) {
            let ul = document.getElementById('ul')
            for (let i = 0; i < this.arrayAfazeres.length; i++) {
                if(this.arrayAfazeres[i].id == id) {
                    ul.removeChild(ul.childNodes[i])
                }

            }
        }   
    }
}
let afazer = new List()