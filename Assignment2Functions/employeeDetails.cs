class Employee {
    int id;
    string name;
    string department;
    bool working;

public:
    void terminateEmployee();
    bool isWorking();
};
class EmployeeRepository {
    public:
        void saveEmployeeToDatabase(Employee emp);
    };
class EmployeeReport {
        public:
            void printEmployeeDetailReportXML(Employee emp);
            void printEmployeeDetailReportCSV(Employee emp);
};
            