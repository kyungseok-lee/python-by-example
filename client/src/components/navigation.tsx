import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  prevSlug?: string | null;
  nextSlug?: string | null;
}

export default function Navigation({ prevSlug, nextSlug }: NavigationProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
      <div className="text-left flex-1">
        {prevSlug ? (
          <Link href={`/${prevSlug}`}>
            <Button variant="outline" className="flex items-center space-x-2">
              <ChevronLeft className="w-4 h-4" />
              <span>이전</span>
            </Button>
          </Link>
        ) : (
          <div className="text-muted-foreground">
            <span className="text-sm">이전</span>
            <div className="text-sm">없음</div>
          </div>
        )}
      </div>
      
      <div className="text-right flex-1 flex justify-end">
        {nextSlug ? (
          <Link href={`/${nextSlug}`}>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>다음</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        ) : (
          <div className="text-muted-foreground">
            <span className="text-sm">다음</span>
            <div className="text-sm">없음</div>
          </div>
        )}
      </div>
    </div>
  );
}
