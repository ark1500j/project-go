import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Link from "next/link";
import { GoogleIcon } from "../icons";

interface AuthFormProps {
  type?: "login" | "signup";
  onSubmit: (formData: {
    email: string;
    password: string;
    confirmPassword?: string;
  }) => void;
  onGoogleAuth: () => void;
}

interface FormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function AuthForm({
  type = "login",
  onSubmit,
  onGoogleAuth,
}: AuthFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (type === "signup" && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="glass-effect p-8 rounded-2xl w-full max-w-md relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-accent-blue/10 to-accent-pink/10 opacity-50" />

      <div className="relative">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {type === "login" ? "Welcome Back" : "Create Account"}
        </h2>

        {/* Google Authentication */}
        <div className="mb-6">
          <button
            type="button"
            onClick={onGoogleAuth}
            className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-white/10 rounded-lg hover:bg-white/5 transition-colors duration-200"
          >
            <GoogleIcon />
            <span className="text-sm font-medium">
              {type === "login" ? "Sign in with Google" : "Sign up with Google"}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-400">or continue with email</span>
          </div>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
          />

          {type === "signup" && (
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder="Confirm your password"
            />
          )}

          <Button type="submit" variant="primary" className="w-full">
            {type === "login" ? "Sign In" : "Sign Up"}
          </Button>
        </form>

        {/* Link to toggle login/signup */}
        <div className="mt-6 text-center text-sm">
          {type === "login" ? (
            <p className="text-gray-400">
              Don{"'"}t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-accent-purple hover:text-accent-blue transition-colors"
              >
                Sign up
              </Link>
            </p>
          ) : (
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-accent-purple hover:text-accent-blue transition-colors"
              >
                Sign in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
