class ISortMethod {
    static sorter(a, b) {
        return a > b ? -1 : 1;
    }
}

class DataAscSortMethod extends ISortMethod {
    static sorter(a, b) {
        return a.rank > b.rank ? -1 : 1;
    }
}

class DataDescSortMethod extends ISortMethod {
    static sorter(a, b) {
        return a.rank < b.rank ? -1 : 1;
    }
}

class ToggleSorter {
    constructor(sortingSequence: Array<ISortMethod>) {
        this.currentMethod = 0;
        this.orderMethod = sortingSequence;
    }
    toggleSort(data: Array) {
        this.currentMethod = this.currentMethod + 1 >= this.orderMethod.length ? 0 : this.currentMethod + 1;
        let copy = Object.assign([], data);
        return copy.sort(this.orderMethod[this.currentMethod].sorter);
    }
}

const sorter = new ToggleSorter([DataAscSortMethod, DataDescSortMethod]);
export default sorter;