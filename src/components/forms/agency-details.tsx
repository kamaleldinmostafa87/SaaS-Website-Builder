import { useToast } from "@/hooks/use-toast";
import { Agency } from "@prisma/client";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useForm } from "react-hook-form";
import * as z from "zod";

type Props = {
  data?: Partial<Agency>;
};

const FormSchema = z.object({
  name: z.string().min(2, { message: "Agency name must be atleast 2 chars." }),
  companyEmail: z.string(),
  companyEmail: z.string(),
  //   companyPhone     :z.string(),
  //   whiteLabel       :z.boolean(),               @default(true)
  //   address          :z.string(),
  //   city             z.string()
  //   zipCode          String
  //   state            String
  //   country          String
});
function AgencyDetails({ data }: Props) {
  const forms = useForm < z.infer<typeof FormSchema>();
  const { toast } = useToast();
  const { router } = useRouter();

  const [deletingAgency, setDeletingAgency] = useState(false);
  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Agency Information</CardTitle>
          <CardDescription>
            Lets create an agency for you buisness. You can edit agency settings
            later from the agency settings tab
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </AlertDialog>
  );
}

export default AgencyDetails;
