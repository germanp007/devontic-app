export interface Items {
  title: string | null;
  description: string | null;
  programType: string | null;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

export type Position = "static" | "relative" | "absolute" | "fixed" | "sticky";
