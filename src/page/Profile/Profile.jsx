import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {VerifiedIcon} from "lucide-react";
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import AccountVerificationForm from "@/page/Profile/AccountVerificationForm.jsx";

const Profile = () => {

  const handleEnableTwoStepVerification=()=>
      console.log("2fa verification")

  return (
      <div className="flex flex-col items-center justify-center mb-5">

        <div className="pt-10 w-full lg:w-[60%]">

          <Card>
            <CardHeader className="pb-9">
              <CardTitle>Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="lg:flex gap-32">
                <div className="space-y-7">
                  <div className="flex">
                    <p className="w-[9rem]">Email :</p>
                    <p className="text-gray-500">parodiathe@mail.ru</p>
                  </div>
                  <div className="flex">
                    <p className="w-[9rem]">Full Name :</p>
                    <p className="text-gray-500">Makushev Daniil</p>
                  </div>
                  <div className="flex">
                    <p className="w-[9rem]">Date of Birthday :</p>
                    <p className="text-gray-500">27/07/2004</p>
                  </div>
                  <div className="flex">
                    <p className="w-[9rem]">Country :</p>
                    <p className="text-gray-500">Russia</p>
                  </div>
                </div>
                <div className="space-y-7">
                  <div className="flex">
                    <p className="w-[9rem]">Email :</p>
                    <p className="text-gray-500">parodiathe@mail.ru</p>
                  </div>
                  <div className="flex">
                    <p className="w-[9rem]">Full Name :</p>
                    <p className="text-gray-500">Makushev Daniil</p>
                  </div>
                  <div className="flex">
                    <p className="w-[9rem]">Date of Birthday :</p>
                    <p className="text-gray-500">27/07/2004</p>
                  </div>
                  <div className="flex">
                    <p className="w-[9rem]">Country :</p>
                    <p className="text-gray-500">Russia</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6">
            <Card className="w-full">
              <CardHeader className="pb-7">
                <div className="flex items-center gap-3">
                  <CardTitle>2fa Verification</CardTitle>
                  {true? <Badge className={"space-x-2 text-white bg-green-600"}>
                    <VerifiedIcon/>
                    <span>Enabled</span>
                  </Badge> :  <Badge className="bg-orange-500">Disabled</Badge>}

                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <Dialog>
                    <DialogTrigger>
                      <Button>Enabled 2fa Verification</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Verify your account</DialogTitle>
                      </DialogHeader>
                      <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
                    </DialogContent>
                  </Dialog>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
  );
};

export default Profile;