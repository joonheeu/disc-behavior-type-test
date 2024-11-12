import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface SaveResultDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  resultName: string
  onResultNameChange: (name: string) => void
  onSave: () => void
}

export function SaveResultDialog({
  open,
  onOpenChange,
  resultName,
  onResultNameChange,
  onSave,
}: SaveResultDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>결과 저장하기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>결과 저장</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="결과 이름을 입력하세요"
            value={resultName}
            onChange={(e) => onResultNameChange(e.target.value)}
          />
          <Button onClick={onSave}>저장</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
