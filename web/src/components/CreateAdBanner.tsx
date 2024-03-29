import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-gradient self-center rounded-lg mt-8 overflow-hidden w-3/4">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded-lg hover:bg-violet-700 flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          publicar anuncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
