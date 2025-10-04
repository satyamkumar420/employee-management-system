"use client";

import { useState } from "react";
import { EmployeeFormState, EmployeeFormErrors } from "../types";

export function useEmployeeForm(initialState: EmployeeFormState) {
  const [formState, setFormState] = useState<EmployeeFormState>(initialState);
  const [errors, setErrors] = useState<EmployeeFormErrors>({
    name: "",
    email: "",
    position: "",
  });

  const validate = () => {
    const newErrors: EmployeeFormErrors = {
      name: "",
      email: "",
      position: "",
    };

    if (!formState.name) {
      newErrors.name = "Name is required.";
    }

    if (!formState.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formState.position) {
      newErrors.position = "Position is required.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((x) => x === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    formState,
    errors,
    validate,
    handleChange,
  };
}
