"use client";

import { useEmployeeForm } from "../hooks/useEmployeeForm";
import Modal from "./Modal";
import EmployeeForm from "./EmployeeForm";

type AddEmployeeProps = {
  onSuccess: () => void;
};

export default function AddEmployee({ onSuccess }: AddEmployeeProps) {
  const { formState, errors, validate, handleChange } = useEmployeeForm({
    name: "",
    email: "",
    position: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    onSuccess();
  };

  return (
    <Modal title="Add Employee" onClose={onSuccess}>
      <EmployeeForm
        formState={formState}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onCancel={onSuccess}
        submitButtonText="Add Employee"
      />
    </Modal>
  );
}
