import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-card shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0 pt-0 space-y-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

interface StepSectionProps {
  stepNumber?: string
  title: string
  description?: string
  children: React.ReactNode
  id?: string
}

export function StepSection({ stepNumber, title, description, children, id }: StepSectionProps) {
  return (
    <Card id={id} className="p-6 mt-8 first:mt-0">
      <CardHeader className="pb-10">
        <CardTitle className="text-lg md:text-xl flex items-center gap-4 text-foreground">
          {stepNumber && <span className="text-primary font-bold">{stepNumber}</span>}
          <span className="leading-tight">{title}</span>
        </CardTitle>
        {description && <CardDescription className="text-sm mt-2 text-muted-foreground leading-relaxed">{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}
