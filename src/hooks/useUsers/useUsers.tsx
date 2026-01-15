import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import type { User, ReqResUserListResponse } from '../../interfaces';
import { useUsersState } from './useUsersState';
import { useUsersEffect } from './useUsersEffect';
import { useUsersHandler } from './useUsersHandler';





export const useUsers = () => {


  const state = useUsersState();

  const effect = useUsersEffect({ state })

  const handlers = useUsersHandler({ state });





  return {
    // Properties
    state,
    effect,

    // Methods
    handlers
  }

}