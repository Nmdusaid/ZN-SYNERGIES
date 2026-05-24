
'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useToast } from '@/hooks/use-toast';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handleError = (error: FirestorePermissionError) => {
      // In production, we'd log this. In dev, we show context.
      console.error('Firebase Permission Denied:', error.context);
      toast({
        variant: 'destructive',
        title: 'Security Protocol Violation',
        description: `Operation ${error.context.operation} denied at ${error.context.path}. Check Security Rules.`,
      });
    };

    errorEmitter.on('permission-error', handleError);
    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, [toast]);

  return null;
}
