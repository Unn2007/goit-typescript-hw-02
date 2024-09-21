import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";
import {FormEvent} from "react"

interface SearchBarProps {
  onSearch: (topic: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const topic = form.elements.namedItem("topic") as HTMLInputElement;

    if (topic.value.trim() === "") {
      toast.error("Please enter search term!", {
        position: "top-left",
      });

      return;
    }

    onSearch(topic.value);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button type="submit" className={css.searcButton}>
          <FaSearch />
        </button >
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;

