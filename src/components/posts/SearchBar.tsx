"use client";
interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: SearchBarProps) {
  return (
    <form
      className="flex justify-center gap-4" // 실행 2 - handleSearch가 실행되서 searchTerm 상태 변경
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // 실행 1 - setInputValue가 실행되서 InputValue 상태 변경
        className="border border-gray-400 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        검색
      </button>
    </form>
  );
}
