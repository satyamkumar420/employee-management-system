"use client";

import { useEmployeeForm } from "../hooks/useEmployeeForm";
import Modal from "./Modal";
import EmployeeForm from "./EmployeeForm";
import { Employee } from "../types";

type EditEmployeeProps = {
  employee: Employee;
  onSuccess: () => void;
};

export default function EditEmployee({
  employee,
  onSuccess,
}: EditEmployeeProps) {
  const { formState, errors, validate, handleChange } = useEmployeeForm({
    name: employee.name,
    email: employee.email,
    position: employee.position,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    await fetch(`/api/employees/${employee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    onSuccess();
  };

  return (
    <Modal title="Edit Employee" onClose={onSuccess}>
      <EmployeeForm
        formState={formState}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onCancel={onSuccess}
        submitButtonText="Update Employee"
      />
    </Modal>
  );
}
