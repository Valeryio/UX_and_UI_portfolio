
import Button from "../components/ui/button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
        <section className="mb-8r m-auto max-w-32r" >
            <form action="" className="flex gap-2r flex-col items-center py-2r m-auto w-24r">
                <h2 className="text-4r font-semibold w-40r text-center" >
                    Connexion
                </h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-1.5r">Email</label>
                    <input type="password"className="h-4r w-24r rounded-md p-2r outline-none text-c-black-100 font-semibold"
                      name="" id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-1.5r">Password</label>
                    <input type="name" className="h-4r w-24r rounded-md p-2r outline-none text-c-black-100 font-semibold"
                     name="" id="password" placeholder="Mot de passe" />
                </div>

                <p className="text-p">
                    Je n'ai pas de compte,
                    <Link to="/inscription" className="pl-1 underline text-c-orange-100 hover:font-semibold" >
                        Inscription
                    </Link>
                </p>
               
               <Button type="primary" >Connexion</Button>
            </form>
        </section>
    </>
)};

export default SignIn;