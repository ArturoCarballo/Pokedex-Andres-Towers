export interface Pokemon {
    id: number;
    name: string;
    stats: Stats;
    types: {
        slot: number;
        type: string;
    }
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }
    moves: Move[];
}

interface Stats {
    stat: {
        name: string
    }
    base_stat: number
}

interface Move {
    move: {
        name: string;
    }
}