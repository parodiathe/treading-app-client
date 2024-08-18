import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.jsx";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {DialogClose} from "@/components/ui/dialog.jsx";

const SignupForm = () => {

    const form = useForm({
        resolver:"",
        defaultValues:{
            fullName:"",
            email:"",
            password:"",
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-center pb-3">Create a New Account</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="Makushev Daniil" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="parodiathe@mail.ru" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="border w-full border-gray-700 p-5"
                                           placeholder="your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                        <Button type="submit" className="w-full py-5">
                            Submit
                        </Button>
                </form>

            </Form>

        </div>
    );
};

export default SignupForm;