class Level{
    constructor(inputCount, outputCount){
        this.inputs=new Array(inputCount);
        this.outputs=new Array(outputCount);
        this.biases=new Array(outputCount);

        this.weight=[];
        for(let i=0; i<inputCount; i++){
            this.weight[i]=new Array(outputCount);
        }

        Level.#randomize(this);
        
    }
}

