import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Crown, AlertTriangle } from "lucide-react"

interface CurrentPlan {
  planName: string
  price: string
  nextBilling: string
  status: string
  daysUsed: number
  totalDays: number
  progressPercentage: number
  remainingDays: number
  needsAttention: boolean
  attentionMessage: string
}

interface CurrentPlanCardProps {
  plan: CurrentPlan
}

export function CurrentPlanCard({ plan }: CurrentPlanCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Plan</CardTitle>
        <CardDescription>
          You are currently on the {plan.planName}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Crown className="h-5 w-5 text-yellow-500" />
            <span className="font-semibold">{plan.planName}</span>
            <Badge variant="secondary">{plan.status}</Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{plan.price}</div>
            <div className="text-sm text-muted-foreground">Next billing: {plan.nextBilling}</div>
          </div>
        </div>

        {plan.needsAttention && (
          <Card className="border-border bg-muted/50">
            <CardContent>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-foreground">We need your attention!</p>
                  <p className="text-sm text-muted-foreground">{plan.attentionMessage}</p>
                </div>
              </div>

              {/* Progress Section */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-medium">Days</span>
                  <span className="text-sm text-muted-foreground font-medium">{plan.daysUsed} of {plan.totalDays} Days</span>
                </div>
                <Progress value={plan.progressPercentage} className="h-2" />
                <p className="text-xs text-muted-foreground">{plan.remainingDays} days remaining until your plan requires update</p>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}
