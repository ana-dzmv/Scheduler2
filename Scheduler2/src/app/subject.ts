export class Subject {
    name: string;
    color: string;
    id: number;
    start_time: string;
    end_time: string;
    slots_taken_count: number;
    slots_taken: number[] = [];

    isDay: boolean[] = [];
}
