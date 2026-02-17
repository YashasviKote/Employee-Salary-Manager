public class Manager extends Employee {

    private final double allowance;

    public Manager(double baseSalary, double allowance) {
        super(baseSalary);
        this.allowance = allowance;
    }

    @Override
    public double calculateSalary() {
        return baseSalary + allowance;
    }
}
