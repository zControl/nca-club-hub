import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export const SocialButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"https://www.facebook.com/ncalliancefc/"}>
              <Button size="sm" variant="outline">
                <FacebookIcon strokeWidth={2} />
              </Button>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>NCA Facebook</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"https://www.twitter.com/ncalliancefc/"}>
              <Button size="sm" variant="outline">
                <TwitterIcon strokeWidth={2} />
              </Button>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>NCA Twitter</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"https://www.instagram.com/ncalliancefc/"}>
              <Button size="sm" variant="outline">
                <InstagramIcon strokeWidth={2} />
              </Button>
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>NCA Instagram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
