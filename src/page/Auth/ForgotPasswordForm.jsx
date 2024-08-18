import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form.jsx";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

const ForgotPasswordForm = () => {

    const form = useForm({
        resolver:"",
        defaultValues:{
            email:""
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-center pb-3">Forgot password</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="border w-full border-gray-700 p-5"
                                        placeholder="enter your email..." {...field} />
                                </FormControl>
                                <FormMessage/>
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

export default ForgotPasswordForm;