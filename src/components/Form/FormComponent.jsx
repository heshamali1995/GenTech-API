const FormComponent = ({ submitForm, setSearchTerm }) => {
  return (
    <form className="text-center pt-8" onSubmit={submitForm}>
        <input type="input" placeholder="Search Titles (qui est)" className="px-4 py-2 outline-none border-2 border-solid border-gray-500 rounded-xl mr-4" onChange={(e) => setSearchTerm(e.target.value)} onKeyUp={submitForm}/>
    </form>
  )
}

export default FormComponent;