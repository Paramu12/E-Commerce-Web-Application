import React, { useMemo, useState } from 'react'
import { toast } from "sonner";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login'); // login or register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isRegister = mode === 'register';
  const title = useMemo(() => isRegister ? 'Create an account' : 'Login to your account', [isRegister]);
  const description = useMemo(() => isRegister ? 'Create an account to get started' : 'Enter your email below to login to your account', [isRegister]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (isRegister && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Account created successfully!", { position: "top-center" });
      }
      else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Logged in successfully!", { position: "top-center" });
        navigate(`/home`);
      }
    }
    catch (error) {
      setError(error.message ?? "Authentication failed. please try again.")
      toast.error(`${error.message}`, { position: "top-center" });
    }
    finally {
      setLoading(false);
    }
  }

  const handleGoogleSignIn = async () => {
    try{
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // const user = result.user;
      toast.success(` Logged in with Google successfully!`, { position: "top-center" });
      navigate(`/home`);
    }
    catch(error){
      setError(error.message ?? "Authentication failed. please try again.")
      toast.error(`${error.message}`, { position: "top-center" });
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="font-bold text-xl">{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
          <CardAction>
            <Button variant="secondary" onClick={() => setMode((m) => m === 'login' ? 'register' : 'login')} disabled={loading}>
              {isRegister ? 'Back to Login' : 'Sign Up'}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="milton@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {
                isRegister ? (
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                    </div>
                    <Input id="confirmPassword" type="password" required disabled={loading} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  </div>
                ) : null
              }
              {
                error ? (
                  <div className="text-sm text-red-500">{error}</div>
                ) : null
              }
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Please wait..." : isRegister ? "Create Account" : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button variant="secondary" onClick={handleGoogleSignIn} disabled={loading}>Sign in with Google</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login;