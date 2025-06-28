import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Link } from "wouter";
import { searchExamples, type Example } from "@/lib/data-loader";

interface SearchProps {
  onClose?: () => void;
  className?: string;
}

export default function Search({ onClose, className }: SearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchResults = useMemo(() => {
    if (query.length === 0) return [];
    return searchExamples(query);
  }, [query]);

  const isLoading = false; // No loading since we're using local data

  useEffect(() => {
    setIsOpen(query.length > 0);
  }, [query]);

  const handleLinkClick = () => {
    setQuery("");
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="예제 검색..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 w-full"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center">
              <div className="loading-spinner w-6 h-6 mx-auto"></div>
            </div>
          ) : searchResults && searchResults.length > 0 ? (
            <div className="py-2">
              {searchResults.map((example) => (
                <Link
                  key={example.id}
                  href={`/${example.slug}`}
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-accent text-left"
                >
                  <div className="font-medium">{example.titleKo}</div>
                  <div className="text-sm text-muted-foreground">{example.description}</div>
                </Link>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              검색 결과가 없습니다.
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
