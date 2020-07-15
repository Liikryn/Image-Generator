interface Genome<T extends Genome<T>>
{

    getFitness(): number

    mutate(): T

}

export default Genome
