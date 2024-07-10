"use client";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useContext, useEffect, useState } from "react";

const UsageTrack = () => {
  interface RESULT {
    id: Number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
  }

  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  useEffect(() => {
    user && GetData();
  }, [user]);

  const GetData = async () => {
    /* @ts-ignore */
    const result: RESULT[] = await db
      .select()
      .from(AIOutput)
      /* @ts-ignore */
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    /* @ts-ignore */
    GetTotalUsage(result);
  };
  const GetTotalUsage = (result: RESULT[]) => {
    let total: number = 0;
    /* @ts-ignore */
    result.forEach((item) => {
      total = total + Number(item.aiResponse?.length);
    });
    setTotalUsage(total);
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#c099a3] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: (totalUsage / 10000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 Credit Used</h2>
      </div>
      <Button variant={"secondary"} className="w-full my-3 text-primary">
        Upgrade
      </Button>
    </div>
  );
};
export default UsageTrack;
