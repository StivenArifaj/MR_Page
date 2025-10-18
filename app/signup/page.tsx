"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Eye, EyeOff, ArrowLeft, CheckCircle2, GraduationCap, Users, BookOpen } from "lucide-react"
import { Toaster, toast } from "react-hot-toast"
import axios from "axios"

export default function SignupPage() {
  const [step, setStep] = useState(0)
  const [userType, setUserType] = useState<"student" | "parent" | "teacher" | "">("")
  const [showPassword, setShowPassword] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [grade, setGrade] = useState("")
  const [childAge, setChildAge] = useState("")
  const [childGrade, setChildGrade] = useState("")
  const [schoolName, setSchoolName] = useState("")
  const [teachingGrade, setTeachingGrade] = useState("")

  const [q1, setQ1] = useState("")
  const [q2, setQ2] = useState("")
  const [q3, setQ3] = useState("")

  const handleUserTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userType) {
      setStep(1)
    }
  }

  const handleBasicSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleQuizSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      })
      toast.success("Account created successfully!")
      setStep(3)
    } catch (error) {
      toast.error("Something went wrong.")
    }
  }

  if (step === 3) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
        <Toaster />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 dark:from-primary/10 dark:via-background dark:to-accent/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-success/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

        <div className="w-full max-w-md text-center relative z-10">
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-8">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Welcome to MoneyRush!</h2>
            <p className="text-muted-foreground mb-8">
              Your account has been created. Start your financial literacy journey today!
            </p>
            <Button asChild className="w-full h-12 text-base font-semibold">
              <Link href="/login">Go to Login</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      <Toaster />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 dark:from-primary/10 dark:via-background dark:to-accent/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-success/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="w-full max-w-md relative z-10">
        <Link
          href={step === 0 ? "/" : "#"}
          onClick={(e) => {
            if (step > 0) {
              e.preventDefault()
              setStep(step - 1)
            }
          }}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {step === 0 ? "Back to home" : "Back"}
        </Link>

        <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">MoneyRush</h1>
            <p className="text-muted-foreground">Learn finances. Build your future.</p>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-8 bg-muted/50 p-1 rounded-lg">
            <Link
              href="/login"
              className="py-2 text-center font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Log In
            </Link>
            <div className="bg-background rounded-md py-2 text-center font-medium shadow-sm">Sign Up</div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`h-2 w-12 rounded-full ${step >= 0 ? "bg-primary" : "bg-muted"}`} />
            <div className={`h-2 w-12 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
            <div className={`h-2 w-12 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
          </div>

          {step === 0 ? (
            <>
              <h2 className="text-2xl font-semibold mb-3">Who are you?</h2>
              <p className="text-sm text-muted-foreground mb-6">Help us personalize your experience</p>

              <form onSubmit={handleUserTypeSubmit} className="space-y-4">
                <RadioGroup value={userType} onValueChange={(value) => setUserType(value as typeof userType)} required>
                  <div className="flex items-start space-x-3 border-2 border-border rounded-xl p-4 hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer">
                    <RadioGroupItem value="student" id="type-student" className="mt-1" />
                    <Label htmlFor="type-student" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-semibold text-base">Student</span>
                      </div>
                      <p className="text-sm text-muted-foreground">I&apos;m a student learning about finances</p>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 border-2 border-border rounded-xl p-4 hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer">
                    <RadioGroupItem value="parent" id="type-parent" className="mt-1" />
                    <Label htmlFor="type-parent" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-semibold text-base">Parent</span>
                      </div>
                      <p className="text-sm text-muted-foreground">I want to help my child learn finances</p>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-3 border-2 border-border rounded-xl p-4 hover:border-primary/50 hover:bg-muted/50 transition-all cursor-pointer">
                    <RadioGroupItem value="teacher" id="type-teacher" className="mt-1" />
                    <Label htmlFor="type-teacher" className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-success" />
                        </div>
                        <span className="font-semibold text-base">Teacher</span>
                      </div>
                      <p className="text-sm text-muted-foreground">I teach financial literacy to students</p>
                    </Label>
                  </div>
                </RadioGroup>

                <Button type="submit" className="w-full h-12 text-base font-semibold mt-6">
                  Continue
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-medium hover:underline">
                  Log in
                </Link>
              </p>
            </>
          ) : step === 1 ? (
            <>
              <h2 className="text-2xl font-semibold mb-6">Create your account</h2>
              <form onSubmit={handleBasicSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="h-12 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
                </div>

                {userType === "student" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="13"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                        min={13}
                        max={18}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade</Label>
                      <Input
                        id="grade"
                        type="text"
                        placeholder="9th"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                )}

                {userType === "parent" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Child&apos;s Age</Label>
                      <Input
                        id="childAge"
                        type="number"
                        placeholder="14"
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                        required
                        min={10}
                        max={18}
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childGrade">Child&apos;s Grade</Label>
                      <Input
                        id="childGrade"
                        type="text"
                        placeholder="9th"
                        value={childGrade}
                        onChange={(e) => setChildGrade(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                )}

                {userType === "teacher" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="schoolName">School Name</Label>
                      <Input
                        id="schoolName"
                        type="text"
                        placeholder="Enter your school name"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teachingGrade">Grade Level You Teach</Label>
                      <Input
                        id="teachingGrade"
                        type="text"
                        placeholder="e.g., 9th-12th"
                        value={teachingGrade}
                        onChange={(e) => setTeachingGrade(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full h-12 text-base font-semibold">
                  Continue
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-primary font-medium hover:underline">
                  Log in
                </Link>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-3">Quick assessment</h2>
              <p className="text-sm text-muted-foreground mb-6">Help us personalize your learning journey</p>

              <form onSubmit={handleQuizSubmit} className="space-y-6">
                {userType === "student" && (
                  <>
                    <div className="space-y-3">
                      <Label className="text-base font-medium">1. What&apos;s your main financial goal?</Label>
                      <RadioGroup value={q1} onValueChange={setQ1} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="save" id="q1-save" />
                          <Label htmlFor="q1-save" className="flex-1 cursor-pointer font-normal">
                            Learn to save money
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="budget" id="q1-budget" />
                          <Label htmlFor="q1-budget" className="flex-1 cursor-pointer font-normal">
                            Understand budgeting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="invest" id="q1-invest" />
                          <Label htmlFor="q1-invest" className="flex-1 cursor-pointer font-normal">
                            Learn about investing
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">2. How much do you know about credit cards?</Label>
                      <RadioGroup value={q2} onValueChange={setQ2} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="nothing" id="q2-nothing" />
                          <Label htmlFor="q2-nothing" className="flex-1 cursor-pointer font-normal">
                            Nothing at all
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="basic" id="q2-basic" />
                          <Label htmlFor="q2-basic" className="flex-1 cursor-pointer font-normal">
                            Basic understanding
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="confident" id="q2-confident" />
                          <Label htmlFor="q2-confident" className="flex-1 cursor-pointer font-normal">
                            Pretty confident
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">3. Do you currently have any income?</Label>
                      <RadioGroup value={q3} onValueChange={setQ3} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="no" id="q3-no" />
                          <Label htmlFor="q3-no" className="flex-1 cursor-pointer font-normal">
                            No income yet
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="allowance" id="q3-allowance" />
                          <Label htmlFor="q3-allowance" className="flex-1 cursor-pointer font-normal">
                            Allowance from parents
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="job" id="q3-job" />
                          <Label htmlFor="q3-job" className="flex-1 cursor-pointer font-normal">
                            Part-time job
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </>
                )}

                {userType === "parent" && (
                  <>
                    <div className="space-y-3">
                      <Label className="text-base font-medium">1. What do you want your child to learn first?</Label>
                      <RadioGroup value={q1} onValueChange={setQ1} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="basics" id="q1-basics" />
                          <Label htmlFor="q1-basics" className="flex-1 cursor-pointer font-normal">
                            Basic money management
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="saving" id="q1-saving" />
                          <Label htmlFor="q1-saving" className="flex-1 cursor-pointer font-normal">
                            Saving and goal setting
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="responsible" id="q1-responsible" />
                          <Label htmlFor="q1-responsible" className="flex-1 cursor-pointer font-normal">
                            Responsible spending
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">2. Does your child currently manage any money?</Label>
                      <RadioGroup value={q2} onValueChange={setQ2} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="no" id="q2-no" />
                          <Label htmlFor="q2-no" className="flex-1 cursor-pointer font-normal">
                            Not yet
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="allowance" id="q2-allowance" />
                          <Label htmlFor="q2-allowance" className="flex-1 cursor-pointer font-normal">
                            Yes, through allowance
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="job" id="q2-job" />
                          <Label htmlFor="q2-job" className="flex-1 cursor-pointer font-normal">
                            Yes, they have a job
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">3. How involved do you want to be?</Label>
                      <RadioGroup value={q3} onValueChange={setQ3} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="monitor" id="q3-monitor" />
                          <Label htmlFor="q3-monitor" className="flex-1 cursor-pointer font-normal">
                            Monitor their progress
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="learn-together" id="q3-learn-together" />
                          <Label htmlFor="q3-learn-together" className="flex-1 cursor-pointer font-normal">
                            Learn together with them
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="independent" id="q3-independent" />
                          <Label htmlFor="q3-independent" className="flex-1 cursor-pointer font-normal">
                            Let them learn independently
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </>
                )}

                {userType === "teacher" && (
                  <>
                    <div className="space-y-3">
                      <Label className="text-base font-medium">1. What&apos;s your main teaching goal?</Label>
                      <RadioGroup value={q1} onValueChange={setQ1} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="curriculum" id="q1-curriculum" />
                          <Label htmlFor="q1-curriculum" className="flex-1 cursor-pointer font-normal">
                            Supplement existing curriculum
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="standalone" id="q1-standalone" />
                          <Label htmlFor="q1-standalone" className="flex-1 cursor-pointer font-normal">
                            Standalone financial literacy course
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="extracurricular" id="q1-extracurricular" />
                          <Label htmlFor="q1-extracurricular" className="flex-1 cursor-pointer font-normal">
                            After-school or club activity
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">2. How many students will use this?</Label>
                      <RadioGroup value={q2} onValueChange={setQ2} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="small" id="q2-small" />
                          <Label htmlFor="q2-small" className="flex-1 cursor-pointer font-normal">
                            1-20 students
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="medium" id="q2-medium" />
                          <Label htmlFor="q2-medium" className="flex-1 cursor-pointer font-normal">
                            21-50 students
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="large" id="q2-large" />
                          <Label htmlFor="q2-large" className="flex-1 cursor-pointer font-normal">
                            50+ students
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">3. What features are most important?</Label>
                      <RadioGroup value={q3} onValueChange={setQ3} required>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="tracking" id="q3-tracking" />
                          <Label htmlFor="q3-tracking" className="flex-1 cursor-pointer font-normal">
                            Student progress tracking
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="engagement" id="q3-engagement" />
                          <Label htmlFor="q3-engagement" className="flex-1 cursor-pointer font-normal">
                            Gamification and engagement
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                          <RadioGroupItem value="reporting" id="q3-reporting" />
                          <Label htmlFor="q3-reporting" className="flex-1 cursor-pointer font-normal">
                            Detailed reporting and analytics
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </>
                )}

                <Button type="submit" className="w-full h-12 text-base font-semibold">
                  Complete Sign Up
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
