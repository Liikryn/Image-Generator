interface Genome<T extends Genome<T>>
{

    getFitness(): number

    mutate(rate: number): T

}

export default Genome
