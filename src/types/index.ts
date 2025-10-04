export type Employee = {
  id: number;
  name: string;
  email: string;
  position: string;
};

export type EmployeeFormState = Omit<Employee, "id">;

export type EmployeeFormErrors = {
  name: string;
  email: string;
  position: string;
};
