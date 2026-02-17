import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {

            System.out.print("Enter employee type (dev/manager): ");
            String type = sc.next();

            System.out.print("Enter base salary: ");
            double base = sc.nextDouble();

            System.out.print("Enter bonus/allowance: ");
            double extra = sc.nextDouble();

            Employee emp;

            if (type.equalsIgnoreCase("dev")) {
                emp = new Developer(base, extra);
            } else {
                emp = new Manager(base, extra);
            }

            System.out.println("Total Salary: " + emp.calculateSalary());
        }
    }
}
