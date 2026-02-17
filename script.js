class Employee {
    constructor(baseSalary) {
        this.baseSalary = baseSalary;
    }

    calculateSalary() {
        return this.baseSalary;
    }
}

class Developer extends Employee {
    constructor(baseSalary, bonus) {
        super(baseSalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}

class Manager extends Employee {
    constructor(baseSalary, allowance) {
        super(baseSalary);
        this.allowance = allowance;
    }

    calculateSalary() {
        return this.baseSalary + this.allowance;
    }
}

function calculate() {
    let type = document.getElementById("type").value;
    let base = Number(document.getElementById("base").value);
    let extra = Number(document.getElementById("extra").value);

    let emp;
    if (type === "developer") {
        emp = new Developer(base, extra);
    } else {
        emp = new Manager(base, extra);
    }

    document.getElementById("result").innerText =
        "Total Salary: " + emp.calculateSalary();
}
