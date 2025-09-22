"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { CalendarDays, Tag, Flag, BookOpen, ArrowUpCircle, CheckCircle } from "lucide-react"
import LogoListtodo from "../partial/LogoListtodo"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CancelAlert from "../modals/CancelAlert"

const FormSchema = z.object({
  title: z.string().min(3, {
    message: "Le titre doit comporter au moins 3 caractères.",
  }),
  category: z.enum(["Etude", "Projet", "Perso"], {
    message: "Choisis une catégorie.",
  }),
  priority: z.enum(["Haute", "Moyenne", "Base"], {
    message: "Choisis une priorité.",
  }),
  deadline: z.string().min(1, { message: "La date limite est requise." }),
})

const FormTodo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      category: "Etude",
      priority: "Moyenne",
      deadline: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("Tâche enregistrée", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  function onReset() {
    form.reset()
  }

  return (
    <div className="w-full flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-blue-100 py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className=" mb-4 flex flex-col items-center gap-2">
            <h2 className=" text-2xl font-bold text-blue-700"> Nouvelle tâche</h2>
            <LogoListtodo />
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-blue-400" /> Titre
                </FormLabel>
                <FormControl>
                  <Input placeholder="Titre de la tâche" {...field} className="border-blue-300 focus:border-blue-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-green-400" /> Catégorie
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <select {...field} className="w-full border rounded px-2 py-2 border-green-300 focus:border-green-500 appearance-none pr-10 bg-white">
                      <option value="Etude">
                        📚 Etude
                      </option>
                      <option value="Projet">
                        💼 Projet
                      </option>
                      <option value="Perso">
                        👤 Perso
                      </option>
                    </select>
                    <BookOpen className="absolute right-2 top-2 w-5 h-5 text-green-400 pointer-events-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Flag className="w-4 h-4 text-red-400" /> Priorité
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <select {...field} className="w-full border rounded px-2 py-2 border-red-300 focus:border-red-500 appearance-none pr-10 bg-white">
                      <option value="Haute">
                        ⬆️ Haute
                      </option>
                      <option value="Moyenne">
                        ➖ Moyenne
                      </option>
                      <option value="Base">
                        ⬇️ Base
                      </option>
                    </select>
                    <ArrowUpCircle className="absolute right-2 top-2 w-5 h-5 text-red-400 pointer-events-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-purple-400" /> Deadline
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input type="date" {...field} className="border-purple-300 focus:border-purple-500 pr-10" placeholder="Choisis une date" />
                    <CalendarDays className="absolute right-2 top-2 w-5 h-5 text-purple-400 pointer-events-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 justify-end mt-6">
            <CancelAlert
              onReset={onReset}
            />
            <Button type="submit" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <CheckCircle className="w-5 h-5" /> Valider
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default FormTodo