
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleEmail = (data) => {
        console.log(data)
    }



    return (
        <div style={{ background: '#2c323f' }}>

            <div className="contact-form-wrapper w-1/2 mx-auto mt-1 py-6">
                <h2 className="text-4xl text-center py-3 text-white">Contacts</h2>
                <form
                    onSubmit={handleSubmit((handleEmail))}>

                    <div className="form-control w-full">
                        <input type="text" {...register("name", { required: "Name is Required" })} placeholder="Type your Name" className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full my-3">
                        <input type="email" {...register("email", { required: "email is Required" })} placeholder="Type your Email" className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <textarea {...register("message", { required: "message is Required" })} placeholder="Your Message" className="w-full textarea textarea-bordered h-24" />

                    <input className='btn w-full mt-3' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;