export interface Pokemon {
    id: number;
    name: string;
    stats: Stats[];
    types: Types[];
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

interface Types {
    type: {
        name: string;
    }
}