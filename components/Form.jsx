import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        { type } and sharre amazing prompts with the 
        world, and let your imagination run wild wit asyncAI-powered platform.
      </p>

      <form 
        
      >

      </form>
    </section>
  )
}

export default Form