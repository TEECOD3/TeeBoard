import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className="bg-dark-blue">
      <div className="flex container min-h-screen items-center justify-center ">
        <div className="py-8 px-6 lg:py-16 lg:px-8 w-[25rem] border-cyan-blue bg-white shadow-md rounded-lg">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
