import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AlertModal = ({ open, onClose, onConfirm, content }) => {
    return (
        <>
            <AlertDialog open={open} onOpenChange={onClose}>
                <AlertDialogContent className="w-[80%]">
                    <AlertDialogHeader>
                        <AlertDialogTitle>{content.title}</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will mark your item as done
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={onConfirm}>
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default AlertModal;
