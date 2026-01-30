import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

type CancelAlertProps = {
  onReset: () => void;
};

const CancelAlert = ({ onReset }: CancelAlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" type="button" className="flex items-center gap-2 border-red-300 text-red-600 hover:bg-red-50">
          <XCircle className="w-5 h-5" /> Annuler
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-xl shadow-lg p-6">
        <AlertDialogHeader className="flex flex-col items-center gap-2">
          <XCircle className="w-10 h-10 text-red-500 mb-2" />
          <AlertDialogTitle className="text-xl font-bold text-red-700">Confirmer l'annulation</AlertDialogTitle>
          <AlertDialogDescription className="text-center text-gray-700">
            Êtes-vous sûr de vouloir annuler la saisie de cette tâche ?<br />
            Les informations saisies seront perdues.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-4 justify-center mt-4">
          <AlertDialogCancel className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded px-4 py-2">Retour</AlertDialogCancel>
          <AlertDialogAction onClick={onReset} className="bg-red-600 text-white hover:bg-red-700 rounded px-4 py-2">Oui, annuler</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default CancelAlert;